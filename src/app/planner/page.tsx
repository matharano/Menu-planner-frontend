'use client'
// Components
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './.css'

let menu_template = [
    [ // The numbers are the columns
        {"name": "Arroz branco", "category": "Arroz branco"},
        {"name": "Arroz integral", "category": "Arroz integral"},
        {"name": "Feijão", "category": "Feijão"}
    ],
    [
        {"name": "Carne bovina", "category": "Carne bovina"},
        {"name": "Frango", "category": "Frango"},
        {"name": "Peixe", "category": "Peixe"},
        {"name": "Proteína vegetal", "category": "Proteína vegetal"}
    ],
    [
        {"name": "Guarnição 1", "category": "Guarnição"},
        {"name": "Guarnição 2", "category": "Guarnição"},
        {"name": "Guarnição 3", "category": "Guarnição"},
        {"name": "Guarnição 4", "category": "Guarnição"}
    ]
];

type dish_category = { name: string; category: string;};

function load_template(template: dish_category[][]) {
    return (
        template.map((col: dish_category[]) => {
            return (
                <div style={{ marginLeft: "20px", marginRight: "20px" }}>
                    {col.map((dish_category: dish_category) => {
                        return (
                            <div style={{ marginTop: "20px" }}>
                                {Card(dish_category)}
                            </div>
                        )
                    })}
                </div>
            )
        }
        )
    )
};

export default function App() {
    return (
        <div className="white-board" style={{ margin:30, padding:10, paddingBottom:30, backgroundColor:'white' }}>
            <div className="white-board-menu" style={{ marginLeft: "20px" }} >
                Cardápio do dia 05 de Agosto de 2023
            </div>
            <div className='white-board-body' >
                {load_template(menu_template)}
            </div>
        </div>
    );
}
let cost = 0

function Card( dish_category: dish_category ) {
    const category = dish_category.category

    return (
            <Accordion className='card' >
                 <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className='card-menu'
                 >
                    {dish_category.name}
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