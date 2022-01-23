export class Aircraft {
    protected numberOfAmmo: number;
    protected maxNumberOfAmmo: number;
    protected baseDamage: number;
    protected type: string;

    constructor(){
        this.numberOfAmmo = 0;
        this.maxNumberOfAmmo = 0;
        this.baseDamage = 0;
        this.type = ""
    }

    fight(): number {
        let causedDamage: number = this.numberOfAmmo * this.baseDamage;
        this.numberOfAmmo = 0;
        return causedDamage;
    }

    refillAmmo(refillNumber: number): number {
        let remainingAmmo: number = 0;
        if (this.maxNumberOfAmmo < refillNumber) {
            this.numberOfAmmo = this.maxNumberOfAmmo;
            remainingAmmo = refillNumber - this.maxNumberOfAmmo;
        } else {
            this.numberOfAmmo = refillNumber;
        }
        return remainingAmmo;
    }

    getType(): string {
        return ""
    }

    getAllDamage():number{
        return this.baseDamage * this.numberOfAmmo;
    }

    getStatus(): string {
        return `${"Type " + this.type + ", Ammo: " + this.numberOfAmmo + ", Base Damage: " + this.baseDamage + ", All Damage: " + this.getAllDamage()}`;
    }

    isPriority(): boolean {
        return true;
    }
}