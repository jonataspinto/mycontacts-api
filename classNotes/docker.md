### Class notes Docker.

```shell
  docker run --name {CONTAINER_NAME} -e {ENVIRONMENT_NAME}={ENVIRONMENT_VALUE} -p 5432:5432 -d {DOCKER_IMAGE_NAME}
```

this command is used to init a container

- `--name` is a flag used to set a name for the container.
- `-e` sets an environment variable.
- `-p` sets a port to service. In this case we define `5432` which is used usually by postgres.
- `-d` sets a docker image that will be used.

---

```shell
  docker exec -it {CONTAINER_NAME} bash
```

This command runs an interactive shell inside of our running container, in this case named "pg". This allows us to execute commands within it and see

- `-it` defines that it will be interactive

- `bash` open bash

---
