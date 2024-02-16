import { DatabaseConnection } from "./database/connection";
import { config } from "dotenv";
// import { seeder } from "./core/database/seeder";
// import { initApi } from "./api";

async function initApplication() {
    config({
        path: "dev.env",
    });

    await DatabaseConnection.init();
    const databaseInstance = DatabaseConnection.getConnection();

    if (process.env.DB_REFRESH === "true") {
        console.log("Refreshing de la DB ...");

        await databaseInstance.dropDatabase();
        await databaseInstance.synchronize();
        // await seeder();
    } else {
        await databaseInstance.synchronize();
    }

    // await initApi();
}

initApplication();
