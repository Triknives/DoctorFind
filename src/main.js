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
      for (let i = 0; i < response.data.length; i++) {
        $('#searchResults').append('<li>'+ '<strong>' + response.data[i].profile.first_name + " "+ response.data[i].profile.last_name + '</strong>' +'</li>' );
        $('#searchResults').append('<li>' + response.data[i].practices[0].phones[0].number) + '</li>';
        $('#searchResults').append('<li>' + response.data[i].practices[0].visit_address.street + '</li>');

        if (response.data[i].practices[0].website === undefined){
          $('#searchResults').append("<li>" + "Sorry, they don't appear to have a website!" + "</li>");
        }else{
          $('#searchResults').append("<li>" + response.data[i].practices[0].website + "</li>");
        }

        if (response.data[i].practices[0].accepts_new_patients === false){
          $('#searchResults').append("<li>" + "Not currently taking new clients." + "</li>");
        }else{
          $('#searchResults').append("<li>" + "Currently taking new clients." + "</li>");
        }
      }
    }
});
});
