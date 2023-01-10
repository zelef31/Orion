import { world } from '@minecraft/server'

const TUTS = new Map();

export class TickOut {

    constructor(callback, tick, loop = false, id = Date.now()) {
        this.callbackTick = null
        this.tickDelay = tick
        this.loop = loop
        this.callback = callback
        this.id = id
        
        TUTS.set(id, this)

        this.TickCallBack = world.events.tick.subscribe(({ currentTick }) => {
            if (!this.callbackTick) this.callbackTick = currentTick + this.tickDelay
            if (this.callbackTick > currentTick) return
            this.callback(currentTick)

            if (!this.loop) return this.expire();
            this.callbackTick = currentTick + this.tickDelay
        });
    }

    expire() {
        world.events.tick.unsubscribe(this.TickCallBack)
        TUTS.delete(this.id)
    }
}