import React from 'react'

export default function AdminPortal() {
  return (
    <>
    <body>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid title">
            <a className="navbar-brand title"
               href="#">
                <h1>MP&AD ENTERPRISES</h1>
            </a>
        </div>
    </nav>
    <center>
        <div className="container-ad-po mx-2">
            <div className="mx-3 my-3">
                <div>
                    <h1>Welcome To Admin Portal</h1>
                </div>
                {/* <!-- production sheet table screen monitoring via admin computer on company server --> */}
                <div >
                    <table border = "2" 
                           className="table table-success table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">UBIN</th>
                                <th scope="col">Tank Weight</th>
                                <th scope="col">Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="seCoBa">
                <div className="my-3">
                    <input type="submit"
                           value="Setting"
                           id="adminPortalsetting"/>
                </div>
                <div className="my-3">
                    <input type="submit"
                           value="Correction"
                           id="correctionBtn"/>
                </div>
                <div className="my-3">
                    <input type="submit"
                           value="Back"
                           id="apBackBtn"/>
                </div>
            </div>
        </div>
    </center>
    {/* <script>
        let apBackBtn = document.getElementById('apBackBtn');
        apBackBtn.addEventListener('click', () => {
            window.location.replace('opap.html')
        })

        let adminPortalsetting = document.getElementById('adminPortalsetting');
        adminPortalsetting.addEventListener('click', () => {
            window.location.replace('setting.html')
        })
        let correctionBtn = document.getElementById('correctionBtn');
        correctionBtn.addEventListener('click', () => {
            window.location.replace('correction.html')
        })


    </script> */}
   
</body>
    
    </>
  )
}
