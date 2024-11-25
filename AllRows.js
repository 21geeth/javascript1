import React from 'react'

import AllTableData from './AllTableData'
    
    
     function AllRows() {
        const students=[{
            sname:'krishna',
            class:'Dotnet'

        },
        {
            sname:'Anitha',
            class:'React'

        },
        {
            sname:'krishna',
            class:'java'

        },
        {
            sname:'priya',
            class:'python'

        },

    ]

      
    const std=students.map(student=>
        <tr><AllTableData sname={student.sname} sclass={student.class}/> </tr>
    )
    return(
        <React.Fragment>
            <br></br> 
            <table border={2} cellSpacing={0} cellPadding={10} align='center'>
                <tbody>
            <tr>
                <AllTableData sname={'Pupil'} sclass={'Course'}></AllTableData>
</tr>
{std}
</tbody>
</table>
        </React.Fragment>
    
  
    
    )
}

export default AllRows
