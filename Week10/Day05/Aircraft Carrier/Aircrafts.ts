export class Aircraft {
    private numberOfAmmo: number;
    private maxNumberOfAmmo: number;
    private baseDamage: number;
    private isPrio: boolean;

    constructor(maxNumberOfAmmo: number, baseDamage: number, isPrio: boolean) {
        this.numberOfAmmo = 0;
        this.maxNumberOfAmmo = maxNumberOfAmmo;
        this.baseDamage = baseDamage;
        this.isPrio = isPrio;
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

    getAllDamage(): number {
        return this.baseDamage * this.numberOfAmmo;
    }

    getType():string{
        return this.constructor.name;
    }

    getStatus(): string {
        return `${"Type " + this.getType() + ", Ammo: " + this.numberOfAmmo + ", Base Damage: " + this.baseDamage + ", All Damage: " + this.getAllDamage()}`;
    }

    isPriority(): boolean {
        return this.isPrio;
    }

    getMaxNumberOfAmmo() :number{
        return this.maxNumberOfAmmo
    }
}