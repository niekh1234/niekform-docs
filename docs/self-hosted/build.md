---
sidebar_position: 3
---

# Starting everything

```bash
yarn build
```

### Installing PM2

```bash
npm install -g pm2
```

### Starting the application

```bash
pm2 start npm --name "niekform" -- start
```

### Starting the application on boot

```bash
pm2 startup
```

### Saving the current process list

```bash
pm2 save
```

### Stopping the application

```bash
pm2 stop niekform
```

### Restarting the application

```bash
pm2 restart niekform
```
