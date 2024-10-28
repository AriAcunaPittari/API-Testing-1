import { test } from "@playwright/test";
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
import * as schemaInfo from "./schemas/schema";
import { validateSchema } from "../utils/schemaValidator";

const schema = new schemaInfo.Schemas();

test.describe("API Testing Practice", () => {
  test(
    "Get: List Users",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      const listUsers = new GetAPI(request);
      const positiveCheck = new GetAPIChecker(request);
      const returnData = await listUsers.ListUsers();
      await positiveCheck.positiveCheck(returnData);
      await validateSchema(true,returnData, schema.userLoginList);
    }
  );

  test(
    "Get: Single User",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      const singleUsers = new GetAPI(request);
      const positiveCheck = new GetAPIChecker(request);
      const returnData = await singleUsers.SingleUsers();
      console.log(returnData);
      await positiveCheck.positiveCheck(returnData);
      await validateSchema(true,returnData, schema.userLogin);
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
    }
  );

  test(
    "Get: List Resource",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      const listResourse = new GetAPI(request);
      const positiveCheck = new GetAPIChecker(request);
      const returnData = await listResourse.ListResourse();
      await positiveCheck.positiveCheck(returnData);
      await validateSchema(true,returnData, schema.userResourceList);
    }
  );

  test(
    "Get: Single Resource",
    {
      tag: "@Get",
    },
    async ({ request }) => {
      const singleResourse = new GetAPI(request);
      const positiveCheck = new GetAPIChecker(request);
      const returnData = await singleResourse.SingleResourse();
      await positiveCheck.positiveCheck(returnData);
      await validateSchema(true,returnData, schema.userResource);
    }
  );

  test(
    "Post: Create",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      const createNew = new PostAPI(request);
      const positiveCheck = new PostAPIChecker(request);
      const createPayLoad = {
        name: "morpheus",
        job: "leader",
      };
      const returnData = await createNew.createNew(createPayLoad);
      await positiveCheck.positiveCheck(returnData);

      await validateSchema(false,returnData, schema.create);
    }
  );

  test(
    "Post: Register OK",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      const registerSuccess = new PostAPI(request);
      const positiveCheck = new PostAPIChecker(request);
      const registerOKPayload = {
        email: "eve.holt@reqres.in",
        password: "pistol",
      };
      const returnData = await registerSuccess.registerSuccess(
        registerOKPayload
      );
      await positiveCheck.positiveCheck(returnData);
      await validateSchema(false,returnData, schema.idToken);
    }
  );

  test(
    "Post: Register Failed",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      const registerFailed = new PostAPI(request);
      const negativeCheck = new PostAPIChecker(request);
      const registerNOTPayload = {
        email: "sydney@fife",
      };
      const returnData = await registerFailed.registerFailed(
        registerNOTPayload
      );
      await negativeCheck.negativeCheck(returnData);
      await validateSchema(false,returnData, schema.infoError);
    }
  );

  test(
    "Post: Login OK",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      const loginSuccess = new PostAPI(request);
      const positiveCheck = new PostAPIChecker(request);
      const loginOKPayload = {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      };
      const returnData = await loginSuccess.loginSuccess(loginOKPayload);
      await positiveCheck.positiveCheck(returnData);
      await validateSchema(false,returnData, schema.login);
    }
  );

  test(
    "Post: Login Failed",
    {
      tag: "@Post",
    },
    async ({ request }) => {
      const loginFailed = new PostAPI(request);
      const negativeCheck = new PostAPIChecker(request);
      const loginNOTPayload = {
        email: "peter@klaven",
      };

      const returnData = await loginFailed.loginFailed(loginNOTPayload);
      await negativeCheck.negativeCheck(returnData);
      await validateSchema(false,returnData, schema.infoError);
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

      const returnData = await updateUser.updateUser(updatePayload,false);
      await updateUserChecker.updateUserChecker(returnData);
      await validateSchema(false,returnData, schema.userUpdate);
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
      //? "returnDataTrue" Lo dejo de ejemplo.
      const returnDataTrue = await updateUser.updateUser(updatePayload, true);
      const returnData = await updateUser.updateUser(updatePayload, false);
      await updateUserChecker.updateUserChecker(returnData);
      await validateSchema(false,returnData, schema.userUpdate);
    }
  );
});
