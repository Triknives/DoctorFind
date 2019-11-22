import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {DoctorFind} from './doctorFind.js';


$(document).ready(function() {
  $('#searchSubmit').submit(function(event){
    event.preventDefault();


    const nameInput =$("#queryInput").val();

    (async () => {
      let doctorFindInfo = new DoctorFind();
      const response = await doctorFindInfo.getDoctorInfo(query);
      getDoctorElement(response);
    })();

    const getDoctorElement = (response) => {
      $('#doctorSearch').text(response.data[0].profile.first_name);
    };
  });
});
