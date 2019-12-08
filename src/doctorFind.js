export class DoctorFind {
  async getDoctorInfo(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=5&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      $('#searchResults').text("Sorry, there was an issue with your request." + error.message);
      console.error("There was an error handling your request: " + error.message);
    }
  }
  async getIssueInfo(issue) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&skip=0&limit=5&user_key=${process.env.API_KEY}`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      $('#searchResults').text("Sorry, there was an issue with your request." + error.message);
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
