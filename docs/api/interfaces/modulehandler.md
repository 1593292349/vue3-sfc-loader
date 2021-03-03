**[vue3-sfc-loader](../README.md)**

> [Globals](../README.md) / ModuleHandler

# Interface: ModuleHandler

Used by the library when it does not know how to handle a given file type (eg. `.json` files).
see [additionalModuleHandlers](options.md#additionalmodulehandlers)

## Hierarchy

* **ModuleHandler**

## Callable

▸ (`source`: string, `path`: string, `options`: [Options](options.md)): Promise<[Module](module.md)\>

*Defined in [index.ts:355](https://github.com/FranckFreiburger/vue3-sfc-loader/blob/6e3ae22/src/index.ts#L355)*

Used by the library when it does not know how to handle a given file type (eg. `.json` files).
see [additionalModuleHandlers](options.md#additionalmodulehandlers)

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`source` | string | The content of the file |
`path` | string | The path of the file |
`options` | [Options](options.md) | The options   **example:**  ```javascript  ...  additionalModuleHandlers: {   '.json': (source, path, options) => JSON.parse(source),  }  ... ```  |

**Returns:** Promise<[Module](module.md)\>
