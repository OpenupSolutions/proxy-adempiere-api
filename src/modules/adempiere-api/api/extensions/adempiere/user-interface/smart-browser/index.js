import { Router } from 'express';
import {
  convertEntityFromGRPC
} from '@adempiere/grpc-api/lib/convertBaseDataType';
module.exports = ({ config }) => {
  let api = Router();
  const ServiceApi = require('@adempiere/grpc-api')
  let service = new ServiceApi(config)
  service.initService()

  /**
   * GET Browser Items
   *
   * req.query.token - user token
   * req.query.language - login language
   * req.query.page_size - size of page (customized)
   * req.query.page_token - token of page (optional for get a specific page)
   * req.body.uuid - browser uuid
   * req.body.filters - query filters
   * req.body.table_name - table name (Mandatory if is not a query)
   * req.body.query - custom query instead a table name based on SQL
   * req.body.where_clause - where clause of search based on SQL
   * req.body.order_by_clause - order by clause based on SQL
   * req.body.limit - records limit
   *
   * Details:
   */
  api.post('/browser-items', (req, res) => {
    const browserRequest = {};
    if (req.query) {
      browserRequest.token = req.query.token;
      browserRequest.language = req.query.language;
      //  Page Data
      browserRequest.pageSize = req.query.page_size;
      browserRequest.pageToken = req.query.page_token;
    }
    if (req.body) {
      //  Running parameters
      browserRequest.uuid = req.body.uuid;
      browserRequest.tableName = req.body.table_name;
      //  DSL Query
      browserRequest.filters = req.body.filters;
      //  Custom Query
      browserRequest.query = req.body.query;
      browserRequest.whereClause = req.body.where_clause;
      browserRequest.orderByClause = req.body.order_by_clause;
      browserRequest.limit = req.body.limit;
    }

    service.listBrowserItems(browserRequest, (err, response) => {
      if (response) {
        res.json({
          code: 200,
          result: {
            record_count: response.getRecordCount(),
            next_page_token: response.getNextPageToken(),
            records: response.getRecordsList().map(entity => {
              return convertEntityFromGRPC(entity)
            })
          }
        });
      } else if (err) {
        res.json({
          code: 500,
          result: err.details
        });
      }
    });
  });

  return api;
};
