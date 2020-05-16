import express from 'express';
import {
  forgotPasswordRequest,
  validateLoginRequest,
  validateSignupRequest
} from '../authentication/authentication.validation';
import * as authenticationController from './authentication.controller';

const router = express.Router();

router.post('/signup', validateSignupRequest, authenticationController.signup);

router.post('/login', validateLoginRequest, authenticationController.login);

// router.get('/confirmation/:tokenId', userController.verifyUser);

router.post(
  '/forgotPassword',
  forgotPasswordRequest,
  authenticationController.forgotPassword
);

router.get(
  '/forgotPassword/:tokenId',
  authenticationController.verifyForgotPassword
);

export const authenticationRoutes = router;
