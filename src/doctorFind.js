import $ from 'jquery';
export class DoctorFind {
  async getDoctorInfo(name) {
    try {
      let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&location=or-portland&skip=0&limit=5&user_key=${process.env.API_KEY}`);
        let jsonifiedResponse = await response.json();
        if(response.ok === false){
          $('#searchResults').text("Sorry, there was an issue with your request.");
        }
        return jsonifiedResponse;
      } catch(error) {
        console.error(error.message);
        $('#searchResults').text("Sorry, there was an issue with your request." + error.message);
      }
    }
    async getIssueInfo(issue) {
      try {
        let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&location=or-portland&skip=0&limit=5&user_key=${process.env.API_KEY}`);
          let jsonifiedResponse = await response.json();
          if(response.ok === false){
            $('#searchResults').text("Sorry, there was an issue with your request.");
          }
          return jsonifiedResponse;
          } catch(error) {
            console.error(error.message);
              $('#searchResults').text("Sorry, there was an issue with your request." + error.message);
          }
        }
      }
