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


### Labeled icons

#### Control Plane Components icons
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/api-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/c-c-m-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/c-m-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/k-proxy-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/kubelet-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/control_plane_components/labeled/sched-128.png)

#### Infrastructure Components icons
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/labeled/control-plane-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/labeled/node-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/labeled/etcd-128.png)

#### Kubernetes Resources icons
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/c-role-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/cm-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/crb-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/crd-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/cronjob-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/deploy-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/ds-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/ep-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/group-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/hpa-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/ing-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/job-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/limits-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/netpol-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/ns-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/pod-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/psp-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/pv-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/pvc-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/quota-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/rb-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/role-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/rs-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/sa-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/sc-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/secret-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/sts-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/svc-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/user-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/labeled/vol-128.png)


### Unlabeled icons

#### Control Plane Components icons

_These icons only exists in their labeled variant, as they would else be duplicating existing unlabeled resource icons._

#### Infrastructure Components icons
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/unlabeled/control-plane-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/unlabeled/node-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/infrastructure_components/unlabeled/etcd-128.png)

#### Kubernetes Resources icons
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/c-role-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/cm-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/crb-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/crd-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/cronjob-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/deploy-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/ds-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/ep-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/group-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/hpa-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/ing-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/job-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/limits-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/netpol-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/ns-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/pod-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/psp-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/pv-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/pvc-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/quota-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/rb-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/role-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/rs-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/sa-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/sc-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/secret-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/sts-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/svc-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/user-128.png)
![](https://raw.githubusercontent.com/kubernetes/community/refs/heads/master/icons/png/resources/unlabeled/vol-128.png)
