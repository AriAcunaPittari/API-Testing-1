import { test, expect } from "@playwright/test";
import { GetAPI } from "./Pages/getAPI";
import { GetAPIChecker } from "./Checker/getChecker";
import { PostAPI } from "./Pages/postAPI";
import { PostAPIChecker } from "./Checker/postChecker";

test.describe("API Testing Practice", () => {
  test("Get: List Users", async ({ request }) => {
    const listUsers = new GetAPI(request);
    const listUserCheck = new GetAPIChecker(request);
    const returnData = await listUsers.ListUsers();
    await listUserCheck.ListUsersCheck(returnData);
  });
  test("Get: Single User", async ({ request }) => {
    const singleUsers = new GetAPI(request);
    const singleUserCheck = new GetAPIChecker(request);
    const returnData = await singleUsers.SingleUsers();
    await singleUserCheck.SingleUsersCheck(returnData);
  });
  test("Get: Not Found", async ({ request }) => {
    const notFound = new GetAPI(request);
    const notFoundCheck = new GetAPIChecker(request);
    const returnData = await notFound.NotFound();
    await notFoundCheck.notFoundCheck(returnData);
  });
  test("Get: List Resource", async ({ request }) => {
    const listResourse = new GetAPI(request);
    const listResourseCheck = new GetAPIChecker(request);
    const returnData = await listResourse.ListResourse();
    await listResourseCheck.ListResourseCheck(returnData);
  });
  test("Get: Single Resource", async ({ request }) => {
    const singleResourse = new GetAPI(request);
    const singleResourseCheck = new GetAPIChecker(request);
    const returnData = await singleResourse.SingleResourse();
    await singleResourseCheck.SingleResourseCheck(returnData);
  });
  test("Post: Create", async ({ request }) => {
    const createNew = new PostAPI(request);
    const createNewCheck = new PostAPIChecker(request);
    const returnData = await createNew.createNew();
    await createNewCheck.createNewCheck(returnData);
  });
  test("Post: Register OK", async ({ request }) => {
    const registerSuccess = new PostAPI(request);
    const registerSuccessCheck = new PostAPIChecker(request);
    const returnData = await registerSuccess.registerSuccess();
    await registerSuccessCheck.registerOKCheck(returnData);
  });
  test("Post: Register Failed", async ({ request }) => {
    const registerFailed = new PostAPI(request);
    const registerFailedCheck = new PostAPIChecker(request);
    const returnData = await registerFailed.registerFailed();
    await registerFailedCheck.registerNOCheck(returnData);
  });
  test("Post: Login OK", async ({ request }) => {
    const loginSuccess = new PostAPI(request);
    const loginSuccessCheck = new PostAPIChecker(request);
    const returnData = await loginSuccess.loginSuccess();
    await loginSuccessCheck.loginOKCheck(returnData);
  });
  test("Post: Login Failed", async ({ request }) => {
    const loginFailed = new PostAPI(request);
    const loginFailedCheck = new PostAPIChecker(request);
    const returnData = await loginFailed.loginFailed();
    await loginFailedCheck.loginNOCheck(returnData);
  });
  test("Put: Update", async ({ request }) => {
    
  });
  test("Delete: Delete User", async ({ request }) => {

  });
  test("Patch: Update", async ({ request }) => {

  });
});
