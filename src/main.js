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
        $('#searchResults').append('<li>' + response.data[i].profile.first_name + " "+ response.data[i].profile.last_name + '</li>' );
        $('#searchResults').append('<li>' + response.data[i].practices[0].phones[0].number) + '</li>';
        $('#searchResults').append('<li>' + response.data[i].practices[0].visit_address.street + '</li>');
        $('#searchResults').append('<li>' + "Are they accepting clients?" + " " + response.data[0].practices[0].accepts_new_patients) + '</li>';
        // if (response.data[0].practices[0].website === undefined){
        //   return $('#searchResults').append("<li>" + "Sorry, they don't appear to have a website!" + "</li>");
        // }else
        // $('#searchResults').append("<li>" + response.data[0].practices[0].website + "</li>");
      }
    };
  });
});
