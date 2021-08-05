import axios from 'axios'
import ApiResultsMapper from 'data/mappers/api-results.mapper'
import CharactersMapper from 'data/mappers/characters.mapper'
import { baseURL, charactersRouter } from 'data/utils/constants'
import { Character } from 'domain/character.model'

export async function getCharacters(): Promise<Character[]> {
  const { data } = await axios.get(`${baseURL}${charactersRouter}`)

  const apiResultsData = ApiResultsMapper.fromJson(data)

  return apiResultsData?.data?.results?.map((result) =>
    CharactersMapper.fromJson(result)
  )
}
