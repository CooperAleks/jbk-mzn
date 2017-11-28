import {isTouchDevice} from './helpers';
import {BODY} from './constants';

if ( !isTouchDevice() ) BODY.addClass('no-touch');

import './components/_countdown';
import './components/_popup';
import './components/_rating';
import './components/_accordion';
import './components/_dragPhoto';
import './components/_ajaxForm';