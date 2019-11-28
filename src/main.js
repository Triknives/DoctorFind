import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {DoctorFind} from './doctorFind.js';

$(document).ready(function() {
  $('#searchSubmit').submit(function(event){
    $('#searchResults').show();
    event.preventDefault();
    const name =$("#nameInput").val();

    (async () => {
      let doctorFindInfo = new DoctorFind();
      const response = await doctorFindInfo.getDoctorInfo(name);
      getDoctorElement(response);
    })();
    const getDoctorElement = (response) => {
      response.data.forEach(function(doctor){
        $('#nameSearch').append("<li>" + response.data[0].profile.first_name +" "+ response.data[0].profile.last_name+ "</li>");
        response.data.forEach(function(number){
          $('#contactNumber').append("<li>" +response.data[0].practices[0].phones[0].number + "</li>");
          response.data.forEach(function(address){
            $('#address').append("<li>" +response.data[0].practices[0].visit_address.street + "</li>");
            response.data.forEach(function(accepting){
              $('#acceptingClients').append("<li>" +response.data[0].practices[0].accepts_new_patients + "</li>");
              console.log(response);
              response.data.forEach(function(website){
                if (response.data[0].practices[0].website === undefined){
                  return $('#website').append("<li>" + "Sorry, they don't appear to have a website!" + "</li>");
                }else
                  $('#website').append("<li>" + response.data[0].practices[0].website + "</li>");
              });
            });
          });
        });
      });
    };
  });
});
