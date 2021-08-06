import axios from 'axios'
import ApiResultsMapper from 'data/mappers/api-results.mapper'
import CharactersMapper from 'data/mappers/characters.mapper'
import {
  auth,
  baseURL,
  characterRouter,
  charactersRouter
} from 'data/utils/constants'
import { Character } from 'domain/character.model'

interface GetCharactersParams {
  name?: string
  nameStartsWith?: string
  limit?: number
}

export async function getCharacters({
  name,
  nameStartsWith,
  limit
}: GetCharactersParams): Promise<Character[]> {
  const nameParam = name ? `name=${name}&` : ''
  const startsWithParam = nameStartsWith
    ? `nameStartsWith=${nameStartsWith}&`
    : ''
  const l = limit ? `limit=${limit}&` : ''
  const { data } = await axios.get(
    `${baseURL}${charactersRouter}${nameParam}${startsWithParam}${auth}`
  )

  const apiResultsData = ApiResultsMapper.fromJson(data)

  return apiResultsData?.data?.results?.map((result) =>
    CharactersMapper.fromJson(result)
  )
}

export async function getCharacter(characterId: number): Promise<Character> {
  const { data } = await axios.get(
    `${baseURL}${characterRouter(characterId)}${auth}`
  )

  const apiResultsData = ApiResultsMapper.fromJson(data)

  return CharactersMapper.fromJson(apiResultsData?.data.results[0])
}
