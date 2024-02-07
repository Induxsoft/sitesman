var drvman = 
{
    units:null,

    deleteUnit(pkUnit)
    {
        let unit = this.units.find(u => u.sys_pk = pkUnit);

        if (!confirm(`Está seguro de eliminar la unidad: ${unit.fsname}?`)){
            return;
        }

        InduxsoftCrudlModel.InvokeService("./" + pkUnit + "/", null,
			success => {
				window.location.reload();
			},
			failure => {
				alert(error.message ?? error);
			}, "DELETE", false
		);
    }
}