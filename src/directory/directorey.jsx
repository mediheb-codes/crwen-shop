import React from 'react'
import './directory.scss';
import MenuItem from '../Menu-item/Menu'
import { selectDirectorySections} from '../redux/directory/directory-select'
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
const Directory = ({sections}) =>(
        <div className="directory-menu">
            {sections.map(({id , ...otherSectionProps})=>(
            <MenuItem key = {id} {...otherSectionProps} />
            ))}
        </div>
    
);


const mapStateToProps = createStructuredSelector({
    sections : selectDirectorySections
})
export default connect(mapStateToProps) (Directory) ;