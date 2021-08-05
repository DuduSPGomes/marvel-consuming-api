import { Container } from './container.model'

export interface ApiResult {
  code: number
  status: string
  data: Container
  etag: string
  copyright: string
  attributionText: string
  attributionHTML: string
}
