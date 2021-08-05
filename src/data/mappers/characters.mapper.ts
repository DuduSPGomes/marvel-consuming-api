import { Character } from 'domain/character.model'

class CharactersMapper {
  static fromJson(json: any): Character {
    return {
      id: json.id,
      name: json.name,
      description: json.description,
      modified: json.modified,
      resourceURI: json.resourceURI,
      urls: json.urls,
      thumbnail: json.thumbnail,
      comics: json.comics,
      stories: json.stories,
      events: json.events,
      series: json.series
    }
  }
}

export default CharactersMapper
