<script>
	import { map } from "ramda";
	import Alert from "./Alert";
console.log(Alert)
	export default {
		name: "AlertsList",
		components: { Alert },
		props: {
			alerts: {
				type: Array,
				default: () => []
			}
		},
		render: function(h) {
			return (
				<div>
					{
						map((alert) => {
							return <Alert level={alert.level} summary={alert.summary} message={alert.message}/>
						},
						this.alerts)
					}
				</div>
			)
		}
	}
</script>