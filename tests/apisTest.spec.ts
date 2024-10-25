import { test, expect } from "@playwright/test";
import { GetAPI } from "./Pages/getAPI";
import { GetAPIChecker } from "./Checker/getChecker";
import { PostAPI } from "./Pages/postAPI";
import { PostAPIChecker } from "./Checker/postChecker";
import { PutAPI } from "./Pages/putAPI";
import { PutChecker } from "./Checker/putChecker";
import { PatchAPI } from "./Pages/patchAPI";
import { PatchAPIChecker } from "./Checker/patchChecker";
import { DeleteAPI } from "./Pages/deleteAPI";
import { DeleteAPIChecker } from "./Checker/deleteChecker";
import * as schemaInfo from "./schemas/schema"
import * as schemaValidator from "../utils/schemaValidator";

const schema = new schemaInfo.Schemas();

test.describe("API Testing Practice", () => {
  test(
    "Get: List Users",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      const listUsers = new GetAPI(request);
      const listUserCheck = new GetAPIChecker(request);
      const returnData = await listUsers.ListUsers();
      await listUserCheck.ListUsersCheck(returnData);
      const response = await request.get(process.env.URL_GET_LISTUSERS!);
      await validSchema(response, schema.loginUsersSchema);
    }
  );

  test(
    "Get: Single User",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      const singleUsers = new GetAPI(request);
      const singleUserCheck = new GetAPIChecker(request);
      const returnData = await singleUsers.SingleUsers();
      console.log(returnData);
      await singleUserCheck.SingleUsersCheck(returnData);
      const response = await request.get(process.env.URL_GET_SINGLEUSER!);
      await validSchema(response, schema.loginUsersSchema);
    }
  );

  test(
    "Get: Not Found",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      const notFound = new GetAPI(request);
      const notFoundCheck = new GetAPIChecker(request);
      const returnData = await notFound.NotFound();
      await notFoundCheck.notFoundCheck(returnData);
      //! hace falta en el Delete y NotFound?
    }
  );

  test(
    "Get: List Resource",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      const listResourse = new GetAPI(request);
      const listResourseCheck = new GetAPIChecker(request);
      const returnData = await listResourse.ListResourse();
      await listResourseCheck.ListResourseCheck(returnData);

      const response = await request.get(process.env.URL_GET_LISTRESOURCE!);
      await validSchema(response, schema.resourceSchema);
    }
  );

  test(
    "Get: Single Resource",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      const singleResourse = new GetAPI(request);
      const singleResourseCheck = new GetAPIChecker(request);
      const returnData = await singleResourse.SingleResourse();
      await singleResourseCheck.SingleResourseCheck(returnData);

      const response = await request.get(process.env.URL_GET_SINGLERESOURCE!);
      await validSchema(response, schema.resourceSchema);
    }
  );

  test(
    "Post: Create",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      const createNew = new PostAPI(request);
      const createNewCheck = new PostAPIChecker(request);
      const createPayLoad = {
        name: "morpheus",
        job: "leader",
      };
      const returnData = await createNew.createNew(createPayLoad);
      await createNewCheck.createNewCheck(returnData);

      const response = await request.get(process.env.URL_POST_CREATE!);
      await validSchema(response, schema.updateUserSchema);
    }
  );

  test(
    "Post: Register OK",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      const registerSuccess = new PostAPI(request);
      const registerSuccessCheck = new PostAPIChecker(request);
      const registerOKPayload = {
        email: "eve.holt@reqres.in",
        password: "pistol",
      };
      const returnData = await registerSuccess.registerSuccess(
        registerOKPayload
      );
      await registerSuccessCheck.registerOKCheck(returnData);
      const response = await request.get(process.env.URL_POST_REGISTER_OK!);
      await validSchema(response, schema.updateUserSchema);
    }

  );

  test(
    "Post: Register Failed",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      const registerFailed = new PostAPI(request);
      const registerFailedCheck = new PostAPIChecker(request);
      const registerNOTPayload = {
        email: "sydney@fife",
      };
      const returnData = await registerFailed.registerFailed(
        registerNOTPayload
      );
      await registerFailedCheck.registerNOCheck(returnData);
      //! Hace falta en el Failed?
    }
  );

  test(
    "Post: Login OK",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      const loginSuccess = new PostAPI(request);
      const loginSuccessCheck = new PostAPIChecker(request);
      const loginOKPayload = {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      };
      const returnData = await loginSuccess.loginSuccess(loginOKPayload);
      await loginSuccessCheck.loginOKCheck(returnData);
      const response = await request.get(process.env.URL_POST_REGISTER_OK!);
      await schemaValidator.validateSchema(response, schema.updateUserSchema);
    }
  );

  test(
    "Post: Login Failed",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      const loginFailed = new PostAPI(request);
      const loginFailedCheck = new PostAPIChecker(request);
      const loginNOTPayload = {
        email: "peter@klaven",
      };

      const returnData = await loginFailed.loginFailed(loginNOTPayload);
      await loginFailedCheck.loginNOCheck(returnData);
    }
  );

  test(
    "Put: Update",
    {
      tag: "@Put",
    },
    async ({ request }) => {
      const updateUser = new PutAPI(request);
      const updateUserChecker = new PutChecker(request);
      const updatePayload = {
        name: "morpheus",
        job: "zion resident now",
      };

      const returnData = await updateUser.updateUser(updatePayload);
      await updateUserChecker.updateUserChecker(returnData);
      const response = await request.get(process.env.URL_PUT_UPDATE!);
      await validSchema(response, schema.updateUserSchema);
    }
  );

  test(
    "Delete: Delete User",
    {
      tag: "@Delete",
    },
    async ({ request }) => {
      const deleteUser = new DeleteAPI(request);
      const deleteUserChecker = new DeleteAPIChecker(request);
      const deletePayload = {
        name: "morpheus",
        job: "zion resident now",
      };

      const returnData = await deleteUser.deleteUser(deletePayload);
      await deleteUserChecker.deleteChecker(returnData);
    }
  );

  test(
    "Patch: Update",
    {
      tag: "@Patch",
    },
    async ({ request }) => {
      const updateUser = new PatchAPI(request);
      const updateUserChecker = new PatchAPIChecker(request);
      const updatePayload = {
        name: "morpheus",
        job: "zion resident now",
      };

      const returnData = await updateUser.updateUser(updatePayload);
      await updateUserChecker.updateUserChecker(returnData);
      const response = await request.get(process.env.URL_PATCH_UPDATE!);
      await validSchema(response, schema.updateUserSchema);
    }
  );
});
