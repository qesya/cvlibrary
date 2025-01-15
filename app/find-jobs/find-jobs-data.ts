import { SelectInputItem } from "@/components/molecules/SelectInput/SelectInput";

export const DISTANCE_DATA: SelectInputItem[] = [
    {
        id: '1',
        value: '15 Miles'
    },
    {
        id: '2',
        value: '30 Miles'
    },
    {
        id: '3',
        value: '45 Miles'
    },
    {
        id: '4',
        value: '60 Miles'
    }
]

export const JOBS_CATEGORY = {
    'Jobs by Location': {
        items: [
            { id: '1', label: 'Aberdeen' },
            { id: '2', label: 'Basingstoke' },
            { id: '3', label: 'Berkshire' },
            { id: '4', label: 'Birmingham' },
            { id: '5', label: 'Bradford' },
            { id: '6', label: 'Bristol' },
            { id: '7', label: 'Derby' },
            { id: '8', label: 'Doncaster' },
            { id: '9', label: 'Edinburgh' },
            { id: '10', label: 'Essex' },
            { id: '11', label: 'Exeter' },
            { id: '12', label: 'Glasgow' },
        ],
        columns: 2,
    },
    'Jobs by Industry': {
        items: [
            { id: '1', label: 'Accounting' },
            { id: '2', label: 'Administration' },
            { id: '3', label: 'Agriculture' },
            { id: '4', label: 'Arts' },
            { id: '5', label: 'Automotive' },
            { id: '6', label: 'Catering' },
            { id: '7', label: 'Distribution' },
            { id: '8', label: 'Driving' },
            { id: '9', label: 'Education' },
            { id: '10', label: 'Electronics' },
            { id: '11', label: 'Engineering' },
            { id: '12', label: 'Financial Services' },
        ],
        columns: 2,
    },
}