import { ApiResult } from 'domain/api-result.model'

class ApiResultsMapper {
  static fromJson(json: any): ApiResult {
    return {
      code: json.code,
      status: json.status,
      data: json.data,
      etag: json.etag,
      copyright: json.copyright,
      attributionText: json.attributionText,
      attributionHTML: json.attributionHTML
    }
  }
}

export default ApiResultsMapper
