import  {test,expect} from '@playwright/test'
import { GetAPI } from './Pages/getAPI'
import { GetAPIChecker } from './Checker/getChecker';
import { PostAPI } from './Pages/postAPI';
import { PostAPIChecker } from './Checker/postChecker';


test.describe('API Testing Practice',() =>{
    test.only('Get: List Users',async ({request})=>{
        const listUsers = new GetAPI(request);
        const listUserCheck = new GetAPIChecker(request);
        await listUsers.ListUsers();
        await listUserCheck.ListUsersCheck();

    })
    test.only('Get: Single User',async ({request})=>{
        const singleUsers = new GetAPI(request);
        const singleUserCheck = new GetAPIChecker(request);
        await singleUsers.SingleUsers();
        await singleUserCheck.SingleUsersCheck();

    })
    test.only('Get: Not Found',async ({request})=>{
        const notFound = new GetAPI(request);
        const notFoundCheck = new GetAPIChecker(request);
        await notFound.NotFound();
        await notFoundCheck.notFoundCheck();


    })
    test.only('Get: List Resource',async ({request})=>{
        const listResourse = new GetAPI(request);
        const listResourseCheck = new GetAPIChecker(request);
        await listResourse.ListResourse();
        await listResourseCheck.ListResourseCheck();


    })
    test.only('Get: Single Resource',async ({request})=>{
        const singleResourse = new GetAPI(request);
        const singleResourseCheck = new GetAPIChecker(request);
        await singleResourse.SingleResourse();
        await singleResourseCheck.SingleResourseCheck();


    })
    test('Post: Create',async ({request})=>{
        const createNew = new PostAPI(request);
        const createNewCheck = new PostAPIChecker(request);

    })
    test('Post: Register OK',async ({request})=>{
        const registerSuccess = new PostAPI(request);
        const registerSuccessCheck = new PostAPIChecker(request);

    })
    test('Post: Register Failed',async ({request})=>{
        const registerFailed = new PostAPI(request);
        const registerFailedCheck = new PostAPIChecker(request);

    })
    test('Post: Login OK',async ({request})=>{
        const loginSuccess = new PostAPI(request);
        const loginSuccessCheck = new PostAPIChecker(request);

    })
    test('Post: Login Failed',async ({request})=>{
        const loginFailed = new PostAPI(request);
        const loginFailedCheck = new PostAPIChecker(request);

    })
    test('Put: Update',async ({request})=>{

    })
    test('Delete: Delete User',async ({request})=>{

    })
    test('Patch: Update',async ({request})=>{

    })

})