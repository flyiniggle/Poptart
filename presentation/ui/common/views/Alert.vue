<script>
	export default {
		name: "Alert",
		props: {
			level: {
				type: String,
				default: "info"
			},
			summary: {
				type: String,
				default: "Uh-oh"
			},
			message: {
				type: String,
				default: "Something isn't quite right."
			},
		},
		computed: {
			icon: function() {
				let icon;

				switch(this.level) {
					case "error":
						icon = "ion-minus-circled";
						break;
					case "warning":
						icon = "ion-alert-circled";
						break;
					case "info":
						icon = "ion-information-circled";
						break;
				}

				return icon;
			}
		},
		render: function(h) {
			return (
				<div class="alert">
					<div class="alert_close"></div>
					<span class={ `${this.level} ${this.icon}` }></span>
					<h4 class="alert_summary">{ this.summary }</h4>
					<span class="alert_message">{ this.message }</span>
				</div>
			)
		}
	}
</script>