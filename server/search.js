const { client, index, type } = require("./connection");

module.exports = {
  /** Query ES index for the provided term */

  queryTerm(term, offset = 0) {
    const body = {
      // paginate the results (10 by default)
      from: offset,

      query: {
        match: {
          text: {
            query: term,

            // use the and operator to prioritise results
            // that contain all of the tokens
            operator: "and",
            fuzziness: "auto"
          }
        }
      },

      // returns the html with the the exact text subset highlighted
      highlight: { fields: { text: {} } }
    };

    return client.search({ index, type, body });
  }
};
