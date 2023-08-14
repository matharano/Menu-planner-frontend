'use client'
// Components
import Paper from '@mui/material/Paper';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Menu } from '@mui/material';
import './.css'

let menu_template = {
    0: [ // The numbers are the columns
        {"name": "Arroz branco", "category": "Arroz branco"},
        {"name": "Arroz integral", "category": "Arroz integral"},
        {"name": "Feijão", "category": "Feijão"}
    ],
    1: [
        {"name": "Carne bovina", "category": "Carne bovina"},
        {"name": "Frango", "category": "Frango"},
        {"name": "Peixe", "category": "Peixe"},
        {"name": "Proteína vegetal", "category": "Proteína vegetal"}
    ],
    2: [
        {"name": "Guarnição 1", "category": "Guarnição"},
        {"name": "Guarnição 2", "category": "Guarnição"},
        {"name": "Guarnição 3", "category": "Guarnição"},
        {"name": "Guarnição 4", "category": "Guarnição"}
    ]
};

function load_template() {
    return (
        <>Template</>
    )
}

export default function App() {
    return (
        <div className="white-board" style={{ margin:10, padding:10, backgroundColor:'white' }}>
            <div className="white-board-menu">
                Cardápio do dia 05 de Agosto de 2023
            </div>
            <div className='white-board-body'>
                <div>
                    <div style={{marginTop:"20px"}}>{Card("Arroz")}</div>
                    <div style={{marginTop:"20px"}}>{Card("Arroz integral")}</div>
                    <div style={{marginTop:"20px"}}>{Card("Feijão")}</div>
                </div>
            </div>
        </div>
    );
}
let cost = 0

function Card( name: string ) {
    return (
            <Accordion className='card' >
                 <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className='card-menu'
                 >
                    {name}
                 </AccordionSummary>
                 <AccordionDetails className='form' sx={{ p: 2 }}>
                    <Autocomplete
                        disablePortal
                        id=''
                        className='dish'
                        size='small'
                        options={['Example 1', 'Example 2']}
                        renderInput={(params: any ) => <TextField {...params} label="Prato" className='dish' />}
                    />
                    <div className='obs-and-cost' >
                        <TextField className='obs' label="Observação" size='small' multiline={true} rows={5} ></TextField>
                        <FormControl className='cost' >
                            {/* <InputLabel id="demo-simple-select-helper-label">Custo</InputLabel> */}
                            <Select
                                labelId="demo-simple-select-helper-label"
                                id="demo-simple-select-helper"
                                // label="Custo"
                                size='small'
                            >
                                <MenuItem>1</MenuItem>
                                <MenuItem>2</MenuItem>
                                <MenuItem>3</MenuItem>
                                <MenuItem>4</MenuItem>
                                <MenuItem>5</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </AccordionDetails>
            </Accordion>
    )
};


function SerializeCards() {
    return
};