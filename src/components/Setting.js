import React from 'react'

export default function Setting() {
  return (
    <>
    <body>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid title">
            <a className="navbar-brand title"
               href="#">
                <h1>setting Section To Set Entries And Other Parameters</h1>
            </a>
        </div>
    </nav>
    <div className="my-4 mx-4 setting">
        <div className="my-4">
            <input type="submit"
                   value="Set Header"
                   name="hfpEntries"
                   //onclick="hfpEntries()"
                   //onClick={hfpEntries()}
                   id="headerBtn"/>
        </div>
        <div className="my-4">
            <input type="submit"
                   value="Set Footer"
                   name="hfpEntries"
                   onclick="hfpEntries()"
                   id="footerBtn"/>
        </div>
        <div className="my-4">
            <input type="submit"
                   value="Set Production Entries"
                   name="hfpEntries"
                   onclick="hfpEntries()"
                   id="productionEntriesBtn"/>
        </div>
        <div className="my-4">
            <input type="submit"
                   value="Back"
                   name="hfpBack"
                   id="hfpBackBtn"/>
        </div>
    </div>

    {/* <script>

        let headerBtn = document.getElementById("headerBtn");
        headerBtn.addEventListener('click', () => {
            window.location.replace('header.html');
            return true;
        })

        let footerBtn = document.getElementById("footerBtn");
        footerBtn.addEventListener('click', () => {
            window.location.replace('footer.html');
            return true;
        })

        let productionEntriesBtn = document.getElementById("productionEntriesBtn");
        productionEntriesBtn.addEventListener('click', () => {
            window.location.replace('setProdEntries.html');
            return true;
        })

        let hfpBackBtn = document.getElementById('hfpBackBtn');
        hfpBackBtn.addEventListener('click', () => {
            window.location.replace('adminPortal.html')
        })


        //  function opap() {
        //                                 let selectValue = document.querySelector('input[name = operatorAdminPanel]:checked').value;
        //                                 console.log(`Selected Value ${selectValue}`);
        //                                 if (selectValue === "operatorPortal") {
        //                                         window.location.replace("operPort.html");
        //                                         return true;
        //                                 }
        //                                 else if (selectValue === "adminPortal") {
        //                                         window.location.replace("password.html");
        //                                         return true;
        //                                 }
        //                                 return false;
        //                         }
    </script> */}
    {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8"
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
            crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
            integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
            crossorigin="anonymous"></script> */}
</body>
    </>
  )
}
