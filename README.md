<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 id ="nms" align="center">NMS</h1>
</p>
<p align="center">
    <h3 align="center">Backend of "E-Suchana : The Notice Management System"</h3>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/raj4477/nms?style=flat&color=0080ff" alt="my-license">
	<img src="https://img.shields.io/github/last-commit/raj4477/nms?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/raj4477/nms?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/raj4477/nms?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/Node.js-grey?style=flat&logo=nodedotjs&logoColor=yellow" alt="Node.js">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
  <img src="https://img.shields.io/badge/MongoDB-grey?style=flat&logo=amazondocumentdb&logoColor=white" alt="JSON">
  <img src="https://img.shields.io/badge/%20JsonWebToken-grey?style=flat&logo=jsonwebtokens" alt="JSON">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#-overview)
> - [📦 Features](#-features)
> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running nms](#-running-nms)
>   - [🧪 Tests](#-tests)
> - [🛠 Project Roadmap](#-project-roadmap)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)
> - [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

<code><b>E-suchana</b> is devised to serve as a centralized platform for managing notices efficiently.
E-suchana represents a paradigm shift in the way notices are managed and circulated within organizational settings.
By leveraging cutting-edge technologies such as Next.js for frontend development and Node.js, Express.js, and MongoDB for backend infrastructure, the platform ensures seamless performance and scalability.
</code>

---

## 📦 Features

<code>► Role Based Login</code><br>
<code>► User Registration (only Admin can)</code><br>
<code>► Automated Mailing System</code><br>
<code>► Notice Published in Hierarchical Level</code><br>
<code>► JsonWebToken Authentication</code><br>
<code>► Secured Routes</code><br>

---

## 📂 Repository Structure

```sh
└── nms/
    ├── LICENSE.txt
    ├── controllers
    │   ├── authLogin.controller.js
    │   ├── cloudinarypublishNotice.js
    │   ├── fetchNotice.controller.js
    │   ├── fetchNt.controller.js
    │   ├── image.controller.js
    │   ├── publishNotice.controller.js
    │   ├── register.controller.js
    │   └── verifyotp.controller.js
    ├── helper
    │   ├── mail.js
    │   └── mailPass.js
    ├── index.js
    ├── middleware
    │   └── jwtauthorization.controller.js
    ├── models
    │   ├── imageNotice.model.js
    │   ├── notice.model.js
    │   ├── otp.model.js
    │   └── user.model.js
    ├── package-lock.json
    ├── package.json
    ├── public
    │   └── myNoticeImage-1708545010599.png
    ├── routers
    │   ├── authorize.router.js
    │   ├── notice.router.js
    │   └── register.router.js
    ├── utils.js
    └── vercel.json
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                              | Summary                         |
| ---                                                                               | ---                             |
| [index.js](https://github.com/raj4477/nms/blob/master/index.js)                   | <code>► Root File</code> |
| [utils.js](https://github.com/raj4477/nms/blob/master/utils.js)                   | <code>► Util File</code> |
| [package.json](https://github.com/raj4477/nms/blob/master/package.json)           | <code>► Packages of Project</code> |
| [vercel.json](https://github.com/raj4477/nms/blob/master/vercel.json)             | <code>► For Deployment</code> |

</details>

<details closed><summary>middleware</summary>

| File                                                                                                                   | Summary                         |
| ---                                                                                                                    | ---                             |
| [jwtauthorization.controller.js](https://github.com/raj4477/nms/blob/master/middleware/jwtauthorization.controller.js) | <code>► JWT Auth Middleware</code> |

</details>

<details closed><summary>models</summary>

| File                                                                                           | Summary                         |
| ---                                                                                            | ---                             |
| [user.model.js](https://github.com/raj4477/nms/blob/master/models/user.model.js)               | <code>► User Model</code> |
| [notice.model.js](https://github.com/raj4477/nms/blob/master/models/notice.model.js)           | <code>► Notice Model</code> |
| [imageNotice.model.js](https://github.com/raj4477/nms/blob/master/models/imageNotice.model.js) | <code>► Image Notice</code> |
| [otp.model.js](https://github.com/raj4477/nms/blob/master/models/otp.model.js)                 | <code>► OTP Model</code> |

</details>

<details closed><summary>controllers</summary>

| File                                                                                                              | Summary                         |
| ---                                                                                                               | ---                             |
| [fetchNotice.controller.js](https://github.com/raj4477/nms/blob/master/controllers/fetchNotice.controller.js)     | <code>► Notice Fetch</code> |
| [authLogin.controller.js](https://github.com/raj4477/nms/blob/master/controllers/authLogin.controller.js)         | <code>► Auth Login</code> |
| [register.controller.js](https://github.com/raj4477/nms/blob/master/controllers/register.controller.js)           | <code>► Registration</code> |
| [cloudinarypublishNotice.js](https://github.com/raj4477/nms/blob/master/controllers/cloudinarypublishNotice.js)   | <code>► Cloudinary CDN</code> |
| [verifyotp.controller.js](https://github.com/raj4477/nms/blob/master/controllers/verifyotp.controller.js)         | <code>► Verify Notice</code> |
| [fetchNt.controller.js](https://github.com/raj4477/nms/blob/master/controllers/fetchNt.controller.js)             | <code>► Fetch Notice</code> |
| [publishNotice.controller.js](https://github.com/raj4477/nms/blob/master/controllers/publishNotice.controller.js) | <code>► Publish Notice</code> |
| [image.controller.js](https://github.com/raj4477/nms/blob/master/controllers/image.controller.js)                 | <code>► Image Controller</code> |

</details>

<details closed><summary>helper</summary>

| File                                                                         | Summary                         |
| ---                                                                          | ---                             |
| [mailPass.js](https://github.com/raj4477/nms/blob/master/helper/mailPass.js) | <code>► Welcome Mail Controller</code> |
| [mail.js](https://github.com/raj4477/nms/blob/master/helper/mail.js)         | <code>► Notice Mail Controller</code> |

</details>

<details closed><summary>routers</summary>

| File                                                                                          | Summary                         |
| ---                                                                                           | ---                             |
| [authorize.router.js](https://github.com/raj4477/nms/blob/master/routers/authorize.router.js) | <code>► Authentication Routes</code> |
| [register.router.js](https://github.com/raj4477/nms/blob/master/routers/register.router.js)   | <code>► Registration Routes</code> |
| [notice.router.js](https://github.com/raj4477/nms/blob/master/routers/notice.router.js)       | <code>► Notice Routes</code> |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`
* **Node.js**: `version x.y.z`

### ⚙️ Installation

1. Clone the nms repository:

```sh
git clone https://github.com/raj4477/nms
```

2. Change to the project directory:

```sh
cd nms
```

3. Install the dependencies:

```sh
npm install
```
4. Create an envronment file (.env) in root directory:
   ```env
   DB_URL=<MongoDB URL>
   MAIL_USER=<Mail ID>
   MAIL_PASS=<Password>
   JWT_KEY=<Secret Key>
   PORT=<PORT Number>
   CLOULD_NAME=<Cloud Name of Cloudinary>
   CLOULD_KEY=<Key of Cloudinary>
   CLOULD_SECRET=<Secret Key of Cloudinay>

   ```

### 🤖 Running nms

Use the following command to run nms:

```sh
node index.js
```



---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/raj4477/nms/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/raj4477/nms/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/raj4477/nms/issues)**: Submit bugs found or log feature requests for Nms.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```git
   git clone https://github.com/raj4477/nms
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [MIT](https://choosealicense.com/licenses/mit/) License. For more details, refer to the [LICENSE](https://github.com/raj4477/nms/blob/main/LICENSE.txt) file.

---

## 👏 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
