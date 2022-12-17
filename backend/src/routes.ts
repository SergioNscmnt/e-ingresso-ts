import { Router } from "express";
import multer from "multer";

// USERS
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from './controllers/user/AuthUserController'
import { DetailUserController } from "./controllers/user/DetailUserController";

// CATEGORY
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";


// MIDDLEWARE

import { isAuthenticated } from "./middlewares/isAuthenticated";
import { CreateEventController } from "./controllers/evento/CreateEventController";

// MULTER

import uploadConfig from './config/multer'
import { ListEventController } from "./controllers/evento/ListEventController";
import { DeleteEventController } from "./controllers/evento/DeleteEventController";

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// USERS
router.post('/users', new CreateUserController().handle)
router.post('/sessions', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DetailUserController().handle)


// CATEGORY

router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', isAuthenticated, new ListCategoryController().handle)

// EVENT

router.post('/events', isAuthenticated, upload.single('file'), new CreateEventController().handle)
router.get('/events', isAuthenticated, new ListEventController().handle)
router.delete('/events/remove', isAuthenticated, new DeleteEventController().handle)

export { router }