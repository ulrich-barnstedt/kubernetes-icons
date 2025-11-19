# Kubernetes-Icons

Wrapper package for the official kubernetes icons provided in [the community repo](`https://github.com/kubernetes/community/tree/master/icons`).


## Example usage

_This example uses Svelte with SvelteKit._

```svelte
<script>
    import podIcon from "kubernetes-icons/svg/resources/labeled/pod.svg";
</script>

<img src={podIcon} alt="Kubernetes pod icon">
```


## Available icons

All icons are available in SVG and PNG, with LABELED and UNLABELED versions.


### `labeled` icons

#### `control_plane_components`
![api](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/api-256.png)
![c-c-m](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/c-c-m-256.png)
![c-m](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/c-m-256.png)
![k-proxy](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/k-proxy-256.png)
![kubelet](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/kubelet-256.png)
![sched](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/sched-256.png)

#### `infrastructure_components`
![control-plane](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/labeled/control-plane-256.png)
![etcd](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/labeled/etcd-256.png)
![master](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/labeled/master-256.png)
![node](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/labeled/node-256.png)

#### `resources`
![c-role](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/c-role-256.png)
![cm](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/cm-256.png)
![crb](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/crb-256.png)
![crd](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/crd-256.png)
![cronjob](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/cronjob-256.png)
![deploy](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/deploy-256.png)
![ds](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/ds-256.png)
![ep](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/ep-256.png)
![group](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/group-256.png)
![hpa](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/hpa-256.png)
![ing](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/ing-256.png)
![job](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/job-256.png)
![limits](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/limits-256.png)
![netpol](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/netpol-256.png)
![ns](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/ns-256.png)
![pod](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/pod-256.png)
![psp](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/psp-256.png)
![pv](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/pv-256.png)
![pvc](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/pvc-256.png)
![quota](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/quota-256.png)
![rb](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/rb-256.png)
![role](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/role-256.png)
![rs](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/rs-256.png)
![sa](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/sa-256.png)
![sc](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/sc-256.png)
![secret](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/secret-256.png)
![sts](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/sts-256.png)
![svc](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/svc-256.png)
![user](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/user-256.png)
![vol](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/vol-256.png)


### `unlabeled` icons

#### `infrastructure_components`
![control-plane](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/unlabeled/control-plane-256.png)
![etcd](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/unlabeled/etcd-256.png)
![master](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/unlabeled/master-256.png)
![node](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/unlabeled/node-256.png)

#### `resources`
![c-role](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/c-role-256.png)
![cm](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/cm-256.png)
![crb](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/crb-256.png)
![crd](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/crd-256.png)
![cronjob](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/cronjob-256.png)
![deploy](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/deploy-256.png)
![ds](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/ds-256.png)
![ep](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/ep-256.png)
![group](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/group-256.png)
![hpa](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/hpa-256.png)
![ing](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/ing-256.png)
![job](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/job-256.png)
![limits](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/limits-256.png)
![netpol](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/netpol-256.png)
![ns](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/ns-256.png)
![pod](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/pod-256.png)
![psp](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/psp-256.png)
![pv](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/pv-256.png)
![pvc](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/pvc-256.png)
![quota](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/quota-256.png)
![rb](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/rb-256.png)
![role](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/role-256.png)
![rs](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/rs-256.png)
![sa](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/sa-256.png)
![sc](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/sc-256.png)
![secret](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/secret-256.png)
![sts](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/sts-256.png)
![svc](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/svc-256.png)
![user](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/user-256.png)
![vol](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/vol-256.png)

