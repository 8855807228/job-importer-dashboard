// Service to fetch and parse XML job feeds
const axios = require('axios');
const { XMLParser } = require('fast-xml-parser');

class JobFetcherService {
  static async fetchAndParse(feedUrl) {
    try {
      const response = await axios.get(feedUrl);
      const parser = new XMLParser();
      const json = parser.parse(response.data);
      // TODO: Parse jobs from JSON structure
      return json;
    } catch (err) {
      throw new Error(`Failed to fetch/parse: ${err.message}`);
    }
  }
}

module.exports = JobFetcherService;
