'use strict'

$(function () {
var data = {
  labels: ["HTML", "CSS", "JavaScript", "Java", "Wordpress", "Boostrap"],
    datasets: [
        {
            label: "My Skill Set",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",
            data: [100, 90, 80, 82, 85, 88]
        }
    ]
};
var options = {
  scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0,    // minimum will be 0, unless there is a lower value.
                // OR //
                beginAtZero: true   // minimum value will be 0.
            }
        }]
    }
};
var ctx = document.getElementById("myChart").getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });
});
$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});
