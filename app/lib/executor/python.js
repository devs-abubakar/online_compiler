import { exec } from "child_process";

export async function runPythonCode(code) {
    console.log("python code runner hit");

    return new Promise((resolve, reject) => {

        const safeCode = code.replace(/"/g, '\\"');

        const command = `docker run --rm python:3.12 python -c "${safeCode}"`;

        console.log(`command : ${command}`);

        exec(command, (error, stdout, stderr) => {

            if (error) {
                console.error("DOCKER ERROR:", error);
                return reject(stderr || error.message);
            }

            if (stderr) {
                console.error("STDERR:", stderr);
            }

            return resolve(stdout);
        });
    });
}