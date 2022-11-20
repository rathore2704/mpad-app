import React from 'react'

export default function Password() {
    return (
        <>
            <body>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid title">
                        <a className="navbar-brand title"
                            href="#">
                            <h1>WELCOME TO MP&AD ENTERPRISES</h1>
                        </a>
                    </div>
                </nav>
                <div className="mx-4 my-4 passWord">
                    <label htmlFor="password">
                        Password: <input type="password"
                            name="admin-password"
                            id="admin-password" />
                        <input type="submit"
                            value="Submit"
                            id="submitPassword" />
                    </label>
                </div>

                {/* <script>
        let submitPassword = document.getElementById('submitPassword');
        submitPassword.addEventListener('click', ()=>{
           window.location.replace('adminPortal.html')
       })

   </script> */}


            </body>
        </>
    )
}
