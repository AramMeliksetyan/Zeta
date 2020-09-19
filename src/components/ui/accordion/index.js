import React, { useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export default function MUIAccordion(props) {
    const [expanded, setExpanded] = useState('panel');
    const handleChange = panel => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <React.Fragment>
            {
                props.data && props.data.map((item) => (
                    <div className='item' key={item.id}>
                        <Accordion expanded={expanded === 'panel' + item.id}
                            onChange={handleChange("panel" + item.id)}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography className='accordion-title'>{item.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography className="accordion-desc">
                                    {item.description}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                ))
            }
        </React.Fragment>
    )
}
