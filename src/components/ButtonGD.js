import { Button } from '@mui/material';
import Iconify from './Iconify';

export function ButtonInfo({ onClick }) {
  return <Button variant='contained' onClick={onClick}><Iconify icon={'ci:info'} /></Button>
}

export function ButtonPlay({ onClick }) {
  return <Button variant='contained' onClick={onClick}><Iconify icon={'cil:media-play'} /></Button>
}

export function ButtonPause({ onClick }) {
  return <Button variant='contained' onClick={onClick}><Iconify icon={'cil:media-pause'} /></Button>
}

export function ButtonReplay({ onClick }) {
  return <Button variant='contained' onClick={onClick}><Iconify icon={'cil:loop-circular'} /></Button>

}

