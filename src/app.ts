import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';

import { conectarServidoraoBD } from './config/db';
import {routerCookie} from './routes/cookie';
import { resolve } from 'url';
import { nextTick } from 'process';
export const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(logger('dev'));
conectarServidoraoBD();
app.use('/cookie', routerCookie);