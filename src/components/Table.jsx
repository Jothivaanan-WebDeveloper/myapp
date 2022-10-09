import React from "react";
import Props from "./PropsName";
import PropsAge from "./PropsAge";

const Table = () => {
    return (
        <>
            <div>
                <table class="table table-bordered">
                    <thead class=''>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>                            
                            <td><Props name='John'/></td>
                            <td><PropsAge age='23'/></td>
                        </tr>
                        <tr>                            
                        <td><Props name='Dave'/></td>
                            <td><PropsAge age='20'/></td>
                        </tr>
                        <tr>                            
                        <td><Props name='Dean'/></td>
                            <td><PropsAge age='25'/></td>
                        </tr>
                       
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;