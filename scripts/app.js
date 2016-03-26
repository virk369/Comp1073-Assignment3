(function () {


    "use strict";
    // Instantiate new xhr object
    var my_data = "scripts/app.json";
    var request = new XMLHttpRequest();
    request.open('GET', my_data, true);
    request.addEventListener('readystatechange', function () {
        // 
        if (request.readyState === 4 && request.status === 200) {
            var para = {};

            // 
            para = JSON.parse(request.responseText);


            // 
            var paraArray = [];

            // 
            paraArray = para.paragraphs;

            //
            var paraArrayLength = paraArray.length;
            //looping
            for (var number = 0; number < paraArrayLength; number++) {
                var para = document.getElementById("mypara" + (number + 1));
                mypara.innerHTML = paraArray[number];

            }
        }
    });
    request.send();

})();