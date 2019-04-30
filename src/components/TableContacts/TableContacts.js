import React from './node_modules/react'
import ReactDataGrid from "react-data-grid";

import './TableContact.css'

const TableContact = ({ contacts }) => {

    const columns = [
        { key: "id", name: "ID", editable: false },
        { key: "name", name: "Name", editable: false },
        { key: "phone", name: "Phone Number", editable: false }
    ];
      
    const rows = [];
    contacts.array.forEach(contact => {
        rows.push({ id: contact.id, name: contact.name, phone: contact.phone })
    });

    const rowGetter = rowNumber => rows[rowNumber];
    
    return(
        <div className="tableContact">
            <ReactDataGrid  
                 columns={columns}
                rowGetter={rowGetter}
                rowsCount={rows.length}
                isExpanded={true}
                minColumnWidth={170}
            />
        </div>
    )
}

export default TableContact