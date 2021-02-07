=====
Mflix
=====

This is a short guide on setting up the system and environment dependencies
required for the MFlix application to run.

**Disclaimer:** The dependencies and versions in this project are not
maintained. This project is intended for educational purposes and is **not**
intended to be exposed in a network, so use at your own discretion.

Project Structure
-----------------

Downloading the **mflix-js.zip** handout may take a few minutes. Unzipping the
file should create a new directory called **mflix-js**.

Most of your work will be implementing methods in the **dao** directory, which
contains all database interfacing methods. The API will make calls to Data
Access Objects (DAOs) that interact directly with MongoDB.

The unit tests in **test** will test these database access methods directly,
without going through the API. The UI will run these methods in integration
tests, and therefore requires the full application to be running.

The lesson handouts can be found in the **test/lessons** directory. These files
will look like **<lesson-name>.spec.js**, and can be run with ``npm test -t
<lesson-name>``.

The API layer is fully implemented, as is the UI. The application is programmed
to  run on port **5000** by default - if you need to run on a port other than
5000, you can edit the **dotenv_win** (if on Windows) or the **dotenv_unix** file
(if on Linux or Mac) in the root directory to modify the value of **PORT**.

Please do not modify the API layer in any way, under the **mflix-js/src/api**
directory. This may result in the front-end application failing to validate some
of the labs.


Node Library Dependencies
-------------------------

The dependencies for the MFlix application should be downloaded using the
``npm`` command-line tool. You can get this tool by `downloading Node.js
<https://nodejs.org/en/download/>`_. Make sure to choose the correct option for
your operating system.

Once the installation is complete, you may need to restart your computer before
using the command line tools. You can test that it's installed by running the
following command:

.. code-block:: sh

  node -v

This should print out the version of ``node`` you currently have - we recommend
using the latest Long Term Support version, currently 10.16.3, so this command should print something like
``v10.16.3``.

Once ``npm`` is installed, you can install the MFlix dependencies by running the
following command from the **mflix-js** directory:

.. code-block:: sh

  npm install

You must run this from the top level of the project, so ``npm`` has access to
the **package.json** file where the dependencies are.

You may see warnings depending on your operating system from **fsevents** or
Husky warning about **git** missing. These are informational only and do not
impact the functionality of the application. You can safely ignore them.

You may also get a **node-gyp** error. Run ``npm rebuild`` and it should resolve
this and install the dependencies required.

While running ``npm install``, you might encounter the below error regarding ``node-gyp rebuild``.
Although, it is completely harmless and you can start the application by running ``npm start``.

.. image:: https://s3.amazonaws.com/university-courses/m220/m220js-npm-install-warning.png


Running the Unit Tests
----------------------

To run the unit tests for this course, you will use `Jest
<https://jestjs.io/docs/en/getting-started>`_. Jest has been included in this
project's dependencies, so ``npm install`` should install everything you need.

Each course lab contains a module of unit tests that you can call individually
with ``npm test``. For example, to run the test **connection-pooling.test.js**,
run the command:

.. code-block:: sh

  npm test -t connection-pooling

Each ticket will contain the exact command to run that ticket's specific unit
tests. You can run these commands from anywhere in the **mflix-js** project.
