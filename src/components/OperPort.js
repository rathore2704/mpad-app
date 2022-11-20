import React from 'react'
import { Link } from 'react-router-dom'

export default function OperPort() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid title">
            <a className="navbar-brand title"
               href='#'>
                <h1>WELCOME TO MP&AD ENTERPRISES</h1>
            </a>
        </div>
    </nav>
    <div className="mx-3 my-3">
        <label action="# "> Operator Name:
            <select name="operator-name"
                    id="operator-name"
                    className="form-select"
                    aria-label="Default select example">
                <option value="operator-present">operator present</option>
                <option value="operator-1">operator-1</option>
                <option value="operator-2">operator-2</option>
                <option value="operator-3">operator-3</option>
            </select>

            <div className="my-3">
                <input type="submit"
                       value="Continue"
                       id="operContBtn"/>

                <input type="submit"
                       value="Back"
                       id="opBackBtn"/>
            </div>

        </label>
    </div>
    </div>
  )
}
