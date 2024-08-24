import axios from 'axios';

export default async function handler(req, res) {
    const url = process.env.SUBGRAPH_API_URL;
    const apiKey = process.env.SUBGRAPH_API_KEY;
  
    const query = `
      query MyQuery {
        accountLiquidateds(first: 10, orderBy: id, orderDirection: desc) {
          id
          blockNumber
          account
        }
      }
    `;
  
    try {
      const response = await axios.post(url, { query }, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ',
        }
      });
  
      res.status(200).json({
        status: true,
        data: response.data.data.accountLiquidateds
      });
    } catch (error) {
      res.status(500).json({
        status: false,
        message: "An error occurred",
        error: error
      });
    }
  }